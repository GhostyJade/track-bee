using Microsoft.AspNetCore.Mvc;

using TrackBEE.API.Data;

namespace TrackBEE.API.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api")]
    public class DataController : ControllerBase
    {
        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await DatabaseInterface.ExecuteStored("st_test_list", null, null);
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
