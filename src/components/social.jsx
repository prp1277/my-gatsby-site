import react from 'react';
import Link from 'gatsby-link';

const SMLinks = (props) => (
  <div className="social"
   style={{ float: `left`, width: `75%`, padding: `15px` }}>
    <li>
        <Link title="Follow-me" to="https://twitter.com/patp0w" target="">
          <i class="fa fa-twitter"/>
         </Link>
        <Link title="My LinkedIn Profile" to="https://linkedin.com/in/prpowell1277" target="">
          <i class="fa fa-linkedin"/>
         </Link>
        <Link title="My Github Profile" to="https://github.com/prp1277" target="">
          <i class="fa fa-github"/>
         </Link>
        <Link title="Follow-me" to="https://facebook.com/patrick.powell1" target="">
          <i class="fa fa-facebook"/>
         </Link>
    </li>
  </div>
)

export default SMLinks
/*
class social extends React.Component {
    constructor(props) {
        this.props = {
            items: [ // These will change to a href or Links
                {
                    text: "Follow Me",
                    done: false
                },
            ]
        }
    }
    return(
        <div><ul><li>
        <Link title="Follow Me" to="https://twitter.com/patp0w" target="none">
            <i class="fa fa-twitter"></i>
            </Link>
          <Link title="My Github Account" to="https://github.com.com/prp1277" target="none">
            <i class="fa fa-github"></i>
            </Link>
          <Link title="My LinkedIn Profile" to="https://linkedin.com/in/prpowell1277" target="none">
            <i class="fa fa-linkedin"></i>
            </Link>
          <Link title="Follow Me" to="https://facebook.com/patrick.powell1" target="none">
            <i class="fa fa-facebook"></i>
            </Link>
          </li>
        </ul></div>
    })
}
export default social
*/