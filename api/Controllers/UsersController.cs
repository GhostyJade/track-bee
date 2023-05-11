using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using TrackBEE.API.Data;
using TrackBEE.API.Models.Users;
using TrackBEE.API.Managers;

using Swashbuckle.AspNetCore.Annotations;

namespace TrackBEE.API.Controllers
{
    [ApiController]
    [Route("api")]
    [Produces("application/json")]
	public class AuthController : ControllerBase
	{
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserModelRequest login)
        {
            IActionResult response = Unauthorized();
            var user = await UsersManager.AuthenticateUser(login);
            if (user != null)
            {
                var tokenString = await UsersManager.GenerateJSONWebToken(user, 120);
                response = Ok(new { user = user.Data, access_token = tokenString });
            }

            return response;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        [SwaggerResponse(200)]
        public async Task<IActionResult> RegisterUser() {
            try
            {
                var result = await NpgSQLDatabaseInterface.ExecuteStored("st_users_register", new { }, null);
                return StatusCode(204);
            }catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [Authorize]
        [HttpGet("loginWithToken")]
        public async Task<IActionResult> LoginWithToken()
        {
            try
            {
                var userUid = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                var result = await NpgSQLDatabaseInterface.ExecuteStored("st_users_get_details", new { user_uid = userUid }, null);

                return StatusCode(200, JObject.Parse(result));
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}

