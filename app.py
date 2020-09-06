from flask import Flask, jsonify
from fetch_from_db import fetch_arenas, fetch_attendance, fetch_stats, fetch_twitter


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################


# @app.route("/")
# def welcome():
#     """List all available api routes."""
#     return (
#         f"Available Routes:<br/>"
#         f"/stats<br/>"
#         f"/arenas<br/>"
#         f"/tweets<br/>"
#         f"/attendance"
#     )


@app.route("/stats")
def get_stats():
    stats = fetch_stats()
    return {"stats_list": stats}


@app.route("/arenas")
def get_arenas():
    arenas = fetch_arenas()
    # return jsonify(arenas)
    return {"arenas_list": arenas}


@app.route("/tweets")
def get_tweets():
    tweets = fetch_twitter()
    # return jsonify(tweets)
    return {"tweets_list": tweets}



@app.route("/attendance")
def get_attendance():
    attendance = fetch_attendance()
    # return jsonify(attendance)
    return {"attendance_list": attendance}




if __name__ == '__main__':
    app.run(debug=True)    




