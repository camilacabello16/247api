using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Common.Models
{
    public class request
    {
        public Guid RequestID { get; set; }
        public Guid ArticleID { get; set; }
        public string RequestName { get; set; }
        public int RequestType { get; set; }
        public string RequestDescription { get; set; }
        public int IsOptional { get; set; }
    }
}
