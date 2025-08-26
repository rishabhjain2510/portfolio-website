from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Route for the Home page
@app.route('/')
def home():
    """Renders the home page."""
    return render_template('index.html')

# Route for the About Me page
@app.route('/about')
def about():
    """Renders the detailed About Me page."""
    return render_template('about.html')

# Route for the main Projects category page
@app.route('/projects')
def projects():
    """Renders the main project categories page."""
    return render_template('projects.html')

# Route for the Journey page
@app.route('/journey')
def journey():
    """Renders the Journey page."""
    return render_template('journey.html')

# Route for the CodroidHub page
@app.route('/codroid')
def codroid():
    """Renders the CodroidHub page."""
    return render_template('codroid.html')

# Route for the Instructor's Voice page
@app.route('/instructor')
def instructor():
    """Renders the Instructor's Voice page."""
    return render_template('instructor.html')

# Route for the Blogs page
@app.route('/blogs')
def blogs():
    """Renders the Blogs page."""
    return render_template('blogs.html')

# Route for the GitHub page
@app.route('/github')
def github():
    """Renders the GitHub projects page."""
    return render_template('github.html')

# --- Routes for Individual Project Categories ---

@app.route('/web-scraping')
def web_scraping():
    """Renders the Web Scraping projects page."""
    return render_template('web-scraping.html')

@app.route('/data-science-projects')
def data_science_projects():
    """Renders the Data Science projects page."""
    return render_template('data-science-projects.html')

@app.route('/power-bi')
def power_bi():
    """Renders the Power BI projects page."""
    return render_template('power-bi.html')

@app.route('/ai-ml')
def ai_ml():
    """Renders the AI/ML projects page."""
    return render_template('ai-ml.html')

# This allows the script to be run directly
if __name__ == '__main__':
    app.run(debug=False, port=5000, host='0.0.0.0')
