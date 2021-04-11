using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aqua.Data.Entities
{
    [Table("aqua.role")]
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }
    }
}