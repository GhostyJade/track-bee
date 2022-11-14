using Newtonsoft.Json;

using System.Data.SqlClient;

namespace TrackBEE.API.Data
{
    public class TSQLDatabaseInterface : IDatabaseInterface
    {
        public static async Task<string> ExecuteStored(string storedName, object parameters, object data, string connectionString = "Default")
        {
            string connString = Startup.Configuration.GetConnectionString(connectionString);
            await using var conn = new SqlConnection(connString);
            await conn.OpenAsync();

            string result = "";

            await using var cmd = new SqlCommand($"SELECT {storedName}({JsonConvert.SerializeObject(parameters)}, {JsonConvert.SerializeObject(data)})", conn);
            await using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
                result += reader.GetString(0);

            return result;
        }
    }
}
