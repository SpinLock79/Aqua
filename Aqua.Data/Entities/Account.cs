using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aqua.Data.Entities
{
    [Table("aqua.account")]
    public class Account
    {
        public Guid Id { get; set; }
        public int RoleId { get; set; }
        public string Name { get; set; }
        public byte[] Password { get; set; }
        
        public virtual Role Role { get; set; }
    }
}