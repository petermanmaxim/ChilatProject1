class Error {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Error!</h3>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
