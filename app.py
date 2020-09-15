from flask import Flask, jsonify, render_template
from pymongo import MongoClient
# from fetch_from_db import fetch_arenas  , fetch_attendance, fetch_stats, fetch_twitter
from fetch_from_db import fetch_from_db
# from flask_cors import CORS

#################################################
# Database Setup
#################################################

data = fetch_from_db()

app = Flask(__name__)
# CORS(app)
# client = MongoClient('mongodb://localhost:27017')
# connection = f'mongodb+srv://{credentials.user}:{credentials.password}@cluster0.zaqco.mongodb.net/<dbname>?retryWrites=true&w=majority'
# connection = f'mongodb+srv://team9_nba_db:team9_nba_db@cluster0.zaqco.mongodb.net/?retryWrites=true&w=majority'
# # client = f'mongodb+srv://{credentials.user}:{credentials.password}@cluster0.zaqco.mongodb.net/<dbname>?retryWrites=true&w=majority'
# client = MongoClient(connection)
# db = client.nba_db


@app.route("/")
def welcome():
    """List all available api routes."""
    # return (
    #     f"Available Routes:<br/>"
    #     f"/stats<br/>"
    #     f"/arenas<br/>"
    #     f"/tweets<br/>"
    #     f"/attendance"
    # )
    return render_template("index.html")


# @app.route("/")
# def show_apis():
    # """List all available api routes."""
    # return (
    #     f"Available Routes:<br/>"
    #     f"/stats<br/>"
    #     f"/arenas<br/>"
    #     f"/tweets<br/>"
    #     f"/attendance"
    # )

@app.route("/stats")
def get_stats():
    # s = json.dumps(fetch_stats())
    # stats = {"stats_list": fetch_stats(db)}
    stats = data.fetch_stats()
    # resp = js
    # print(s)
    # print(stats)
    # return stats
    # return render_template("index.html", stats)
    return jsonify(stats)


@app.route("/arenas")
def get_arenas():
    arenas = data.fetch_arenas()
    # return jsonify(arenas)
    # return arenas
    # return render_template("index.html", arenas)
    return jsonify(arenas)

@app.route("/tweets")
def get_tweets():
    tweets = data.fetch_twitter()
    # return jsonify(tweets)
    # return tweets
    # return render_template("index.html", tweets)
    return jsonify(tweets)



@app.route("/attendance")
def get_attendance():
    attendance = data.fetch_attendance()
    # return jsonify(attendance)
    # return attendance
    # return render_template("index.html", attendance)
    return jsonify(attendance)




if __name__ == '__main__':
    app.run(debug=True)    




