import { useState } from 'react';

export default Contact = () => {
  return (
    <div>
      <div id="footer">
        <div class="vcard">
          <dl class="dl dl-vertical">
            <dt>E-mail:</dt>
            <dd>
              <a href="mailto:niferkilakila@gmail.com"><i class="icon fa fa-envelope"></i> niferkilakila@gmail.com</a>
            </dd>
            <dt>&nbsp;</dt>
            <dd></dd>
            <dt>LinkedIn:</dt>
            <dd>
              <a href="https://www.linkedin.com/in/nifer-kilakila-b0721565/"><i class="icon fa fa-linkedin"></i> N Kilakila</a>
            </dd>

            <dt>Github:</dt>
            <dd>
              <a href="https://github.com/NaNifer"><i class="icon fa fa-github"></i> NaNifer</a>
            </dd>

            <dt>StackOverflow:</dt>
            <dd>
              <a href="https://stackoverflow.com/users/18479722/nifer"><i class="icon fa fa-twitter"></i> @nanifer</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
