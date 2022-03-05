// This file is licensed by GhostyJade under the MIT license.
namespace TrackBEE.API.Models
{
    /// <summary>
    /// This class contains information about a Github project release
    /// </summary>
    public class GithubVersionModel
    {
        /// <summary>
        /// The release name
        /// </summary>
        public string? Name { get; set; }
        /// <summary>
        /// The release publish date and time
        /// </summary>
        public DateTime? PublishDate { get; set; }
    }
}
