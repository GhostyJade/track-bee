using Newtonsoft.Json.Linq;

using TrackBEE.API.Models;

namespace TrackBEE.API.Managers
{
    public class GithubManager
    {
        private const string GITHUB_URL = "https://api.github.com/repos/{0}/releases/latest";

        private static IConfigurationSection _configuration
        {
            get {
                var section = Startup.Configuration?.GetSection("GithubVersion");
                if (section == null)
                    throw new NullReferenceException("You must configure this section in order to use the GithubController controller");
                return section;
            }
        }

        private static readonly HttpClient _httpClient = new();

        public static async Task<GithubVersionModel?> GetLatestVersionData()
        {
            var response = await _httpClient.GetAsync(string.Format(GITHUB_URL, _configuration.GetValue<string>("Repository")));
            if(!response.IsSuccessStatusCode)
                return null; // TODO change with a custom exception that can contain a JObject and the status code
            var versionString = await response.Content.ReadAsStringAsync();
            var versionJson = JObject.Parse(versionString);

            return new GithubVersionModel
            {
                Name = versionJson.Value<string>("name"),
                PublishDate = versionJson.Value<DateTime?>("published_at") ?? null,
            };
        }
    }
}
