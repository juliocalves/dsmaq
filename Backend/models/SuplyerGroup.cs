using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.models
{
    public class SuplyerGroup
    {
        public int Id {get; set;}
        public string Description {get;set;} = string.Empty;

    }
}