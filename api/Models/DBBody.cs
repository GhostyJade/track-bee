using System.ComponentModel.DataAnnotations;

namespace TrackBEE.API.Models
{
    public class DBBody
    {
        [Required]
        public string Function { get; set; }
        public object? Data { get; set; }
    }
}
