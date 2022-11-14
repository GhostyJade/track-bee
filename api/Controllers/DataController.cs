using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
        [HttpPost("data")]
        public async Task<IActionResult> Execute([FromBody] DBBody data)
        {
            try
            {
                var result = await NpgSQLDatabaseInterface.ExecuteStored(data.Function, null, data.Data);
                var obj = JsonConvert.DeserializeObject(result);
                return StatusCode(200, obj);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
