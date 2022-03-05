using Microsoft.AspNetCore.Mvc;

using TrackBEE.API.Managers;

namespace TrackBEE.API.Controllers
{
    [ApiController]
    [Route("api/version")]
    [Produces("application/json")]
    public class GithubController : ControllerBase
    {
        [HttpGet("latest")]
        public async Task<IActionResult> GetLatestVersion()
        {
            try
            {
                var result = await GithubManager.GetLatestVersionData();
                return Ok(result);
            }
            catch (Exception ex)
            {
                // TODO
                return StatusCode(500, ex.Message);
            }
        }
    }
}
