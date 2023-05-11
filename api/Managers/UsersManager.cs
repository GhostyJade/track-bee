using Newtonsoft.Json.Linq;
using System.Security.Claims;
using System.Text;
using TrackBEE.API.Data;
using TrackBEE.API.Models.Users;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace TrackBEE.API.Managers
{
	public static class UsersManager
	{
        public static async Task<string> GenerateJSONWebToken(UserModel userInfo, int validMinutes)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = await CreateClaimsIdentitiesAsync(userInfo);

            var token = tokenHandler.CreateJwtSecurityToken(
                issuer: Startup.Configuration!["Jwt:Issuer"],
                audience: Startup.Configuration!["Jwt:Audience"],
                subject: claims,
                notBefore: DateTime.UtcNow,
                expires: DateTime.UtcNow.AddMinutes(validMinutes),
                signingCredentials:
                new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Startup.Configuration["Jwt:Key"])), SecurityAlgorithms.HmacSha256Signature)
            );

            return tokenHandler.WriteToken(token);
        }

        private static Task<ClaimsIdentity> CreateClaimsIdentitiesAsync(UserModel user)
        {
            ClaimsIdentity claimsIdentity = new();
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Email, user.Email));
            claimsIdentity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Uid));
            return Task.FromResult(claimsIdentity);
        }

        public static async Task<UserModel> AuthenticateUser(UserModelRequest login)
        {
            UserModel user = null;
            try
            {
                var dbResult = await NpgSQLDatabaseInterface.ExecuteStored("st_users_login", new { user_mail = login.Email, user_password = login.Password }, null);
                var result = JObject.Parse(dbResult);
                if (result.ContainsKey("data"))
                {
                    var userData = result.SelectToken("data");

                    user = new UserModel()
                    {
                        Uid = userData!.SelectToken("user_uid")!.ToString(),
                        Email = userData!.SelectToken("user_email")!.ToString(),
                        Data = userData
                    };
                    return user;
                }
            }
            catch
            {
                return null;
            }
            return user;
        }
    }
}

