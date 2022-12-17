

import './notfound.css';

function NotFound(){

    return(

        <div className = "not_found">
            <div className="not_found_block">
                <div className = "not_found_block_number">404</div>
                <div className = "not_found_block_text">
                    Page not found
                </div>
            </div>
        </div>
    );
}

export default NotFound;