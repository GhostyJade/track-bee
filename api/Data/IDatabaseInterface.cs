namespace TrackBEE.API.Data
{
    public interface IDatabaseInterface
    {
        static Task<string> ExecuteStored(string storedName, object parameters, object data, string connectionString = "Default") => throw new NotImplementedException();
    }
}
