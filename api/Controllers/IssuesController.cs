using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using TrackBEE.API.Data;

namespace TrackBEE.API.Controllers
{
	[ApiController]
	[Route("issues")]
	public class IssuesController : ControllerBase
	{
		[HttpGet]
		[AllowAnonymous]
		public async Task<IActionResult> GetIssues()
		{
			try
			{
				var result = await NpgSQLDatabaseInterface.ExecuteStored("st_get_issues", null, null);
				var issuesJson = JObject.Parse(result);
				return StatusCode(200, issuesJson);
			}
			catch(Exception ex)
			{
				return StatusCode(500, ex.Message);
			}
		}
	}
}

