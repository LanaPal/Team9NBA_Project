from flask import Flask, jsonify
from pymongo import MongoClient
from fetch_from_db import fetch_arenas  , fetch_attendance, fetch_stats, fetch_twitter
import json

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017')
db = client.nba_db


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
    # s = json.dumps(fetch_stats())
    stats = {"stats_list": fetch_stats(db)}
    # resp = js
    # print(s)
    return stats


@app.route("/arenas")
def get_arenas():
    arenas = {"arenas_list": fetch_arenas(db)}
    # return jsonify(arenas)
    return arenas


@app.route("/tweets")
def get_tweets():
    tweets = {"tweets_list": fetch_twitter(db)}
    # return jsonify(tweets)
    return tweets



@app.route("/attendance")
def get_attendance():
    attendance = {"attendance_list": fetch_attendance(db)}
    # return jsonify(attendance)
    return attendance




if __name__ == '__main__':
    app.run(debug=True)    




