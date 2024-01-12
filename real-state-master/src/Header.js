import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header id="aa-header" style={{ backgroundColor: '#7CB9E8' , zIndex: '1000' }}>  
        <div className="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-header-area">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="aa-header-left">
                      <div class="aa-telephone-no">
                      {/* <span class="fa fa-envelope"></span>
                        +91 960-354-6303 */}
                      </div>
                      <div class="aa-email hidden-xs">
                      <span class="fa fa-envelope"></span>
                        info@Matrical.com
                      </div>
                    </div>              
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="aa-header-right">
                      <Link to="/Register" class="aa-register">Register</Link>
                      <Link to="/Login" class="aa-register">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
