from flask import Flask

DEBUG = True
PORT = 8001

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").


@app.route('/')
def index():
    my_list = ["Hey", "check", "this", "out"]
    return my_list[0]


# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
