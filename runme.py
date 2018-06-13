from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

socketio = SocketIO(app)

@app.route('/')
def index():
	return render_template('index.html')
	
@app.route('/local')
def game():
	return render_template('local.html')
	
@socketio.on('message')
def handleMessage(msg):
	send(msg, broadcast=True, include_self=False)

if __name__ == "__main__":
	socketio.run(app)