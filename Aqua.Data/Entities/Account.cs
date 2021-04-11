using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Aqua.Data.Entities
{
    [Table("aqua.account")]
    public abstract class Account
    {
        protected Account(Guid id, int roleId, string name, byte[] password, Role role)
        {
            Id = id;
            RoleId = roleId;
            Name = name;
            Password = password;
            Role = role;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; }
        public int RoleId { get; }
        public string Name { get; }
        public byte[] Password { get; }
        
        public virtual Role Role { get; }
    }
}