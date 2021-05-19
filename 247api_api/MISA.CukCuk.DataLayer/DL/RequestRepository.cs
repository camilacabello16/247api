using API.Common.Models;
using API.DataLayer.interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace API.DataLayer.DL
{
    public class RequestRepository : DbContext<request>, IRequestRepository
    {
        public IEnumerable<request> GetRequestByArticle(Guid articleId)
        {
            var data = _dbConnection.Query<request>($"SELECT * FROM request WHERE ArticleID = '{articleId}'", commandType: CommandType.Text);
            return data;
        }
    }
}
