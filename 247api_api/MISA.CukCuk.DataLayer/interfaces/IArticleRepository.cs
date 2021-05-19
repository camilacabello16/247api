using API.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace API.DataLayer.interfaces
{
    public interface IArticleRepository : IDbContext<article>
    {
        public IEnumerable<article> GetArticleById(Guid articleId);
    }
}
