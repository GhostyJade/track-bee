using Newtonsoft.Json;

using Npgsql;

namespace TrackBEE.API.Data
{
    public static class NpgSQLDatabaseInterface
    {
        public static async Task<string> ExecuteStored(string storedName, object parameters, object data, string connectionString = "Default")
        {
            string connString = Startup.Configuration.GetConnectionString(connectionString);
            await using var conn = new NpgsqlConnection(connString);
            await conn.OpenAsync();

            string result = "";

            await using var cmd = new NpgsqlCommand($"SELECT {storedName}({JsonConvert.SerializeObject(parameters)}, {JsonConvert.SerializeObject(data)})", conn);
            await using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
                result += reader.GetString(0);

            return result;
        }
    }
}
