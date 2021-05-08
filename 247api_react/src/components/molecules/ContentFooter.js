import React from 'react';
import '../../assets/styles/molecules/content-footer.css';
import logo from '../../assets/images/247logo.png';

function ContentFooter() {
    return (
        <div className="wrap-content-footer">
            <div className="wrap-content-footer-logo">
                <div className="content-footer-logo">
                    <img src={logo} />
                </div>
                <div className="time-update">
                    Last updated <span>3 months ago</span>
                </div>
            </div>
            <div className="rating-article">
                <div className="rating-txt">Was this page helpful?</div>
                <div className="rating-option">
                    <div className="rating-option-item rating-sad">
                        <svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="none" class="icon-7f6730be--text-3f89f380"><g><path d="M9.707 8.707a.993.993 0 0 0 .006-1.396 1.007 1.007 0 0 0-1.408-.03C8.273 7.312 7.519 8 6 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 0 0-1.404 1.424C2.425 8.839 3.653 10 6 10c2.347 0 3.575-1.161 3.707-1.293m12 0a.993.993 0 0 0 .006-1.396 1.006 1.006 0 0 0-1.408-.03C20.273 7.312 19.519 8 18 8c-1.497 0-2.251-.67-2.303-.717a1 1 0 0 0-1.404 1.424C14.425 8.839 15.653 10 18 10c2.347 0 3.575-1.161 3.707-1.293M21.001 19a1 1 0 0 1-.896-.553C20.036 18.314 18.225 15 12 15c-6.225 0-8.036 3.314-8.11 3.456a1.002 1.002 0 0 1-1.344.43.997.997 0 0 1-.441-1.333C2.198 17.367 4.469 13 12 13s9.802 4.367 9.895 4.553A1.001 1.001 0 0 1 21.001 19" fill-rule="evenodd"></path></g></svg>
                    </div>
                    <div className="rating-option-item rating-middle">
                        <svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="none" class="icon-7f6730be--text-3f89f380"><g><path d="M10 8a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1m12 0a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1m-1 9H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2" fill-rule="evenodd"></path></g></svg>
                    </div>
                    <div className="rating-option-item rating-happy">
                        <svg preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="none" class="icon-7f6730be--text-3f89f380"><g><path d="M9.707 8.707a.999.999 0 0 0 0-1.414C9.575 7.161 8.347 6 6 6 3.653 6 2.425 7.161 2.293 7.293a.992.992 0 0 0-.005 1.396 1.007 1.007 0 0 0 1.408.029C3.727 8.689 4.481 8 6 8c1.52 0 2.273.689 2.293.707a.997.997 0 0 0 1.414 0m12 0a.999.999 0 0 0 0-1.414C21.575 7.161 20.347 6 18 6c-2.347 0-3.575 1.161-3.707 1.293a.992.992 0 0 0-.005 1.396 1.006 1.006 0 0 0 1.407.029C15.727 8.689 16.481 8 18 8c1.52 0 2.273.689 2.293.707a.997.997 0 0 0 1.414 0M12 19c-7.53 0-9.8-4.367-9.894-4.553a1.001 1.001 0 0 1 1.786-.902C3.974 13.704 5.792 17 12 17c6.226 0 8.037-3.314 8.111-3.456a1.007 1.007 0 0 1 1.344-.43.998.998 0 0 1 .441 1.333C21.802 14.633 19.531 19 12 19" fill-rule="evenodd"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentFooter;