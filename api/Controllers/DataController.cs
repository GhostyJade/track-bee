using Microsoft.AspNetCore.Mvc;

using TrackBEE.API.Data;
using TrackBEE.API.Models;

namespace TrackBEE.API.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api")]
    public class DataController : ControllerBase
    {
        // TODO: add authentication
        /// <summary>
        /// Execute a function on the PostgreSQL database and return a json containing the response
        /// </summary>
        /// <returns>A JObject containing the respose from database</returns>
        [HttpGet("data")]
        public async Task<IActionResult> Get([FromBody] DBBody data)
        {
            try
            {
                var result = await NpgSQLDatabaseInterface.ExecuteStored(data.Function, null, data.Data);
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
