using API.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace API.DataLayer.interfaces
{
    public interface IRequestRepository : IDbContext<request>
    {
        public IEnumerable<request> GetRequestByArticle(Guid articleId);
    }
}
