from pymongo import MongoClient
from secret import credentials
# make connection and return db

def get_db():
    # client = MongoClient('mongodb://localhost:27017')
    connection = f'mongodb+srv://team9_nba_db:team9_nba_db@cluster0.zaqco.mongodb.net/<dbname>?retryWrites=true&w=majority'
    # client = f'mongodb+srv://{credentials.user}:{credentials.password}@cluster0.zaqco.mongodb.net/<dbname>?retryWrites=true&w=majority'
    client = MongoClient(connection)
    return client.nba_db

def remove_id(dictionaries):
    for d in dictionaries:
        del d['_id']
    return dictionaries

def fetch_stats(db):  
    # db= get_db()
    # "{} means find everything"
    stats = [player for player in db.stats.find({})]
    stats = remove_id(stats)
    # print(stats)
    return stats 


def fetch_attendance(db):  
    # db= get_db()
    # "{} means find everything"
    attendance = [player for player in db.attendance.find({})]
    attendance = remove_id(attendance)
    return attendance


def fetch_twitter(db):  
    # db= get_db()
    # "{} means find everything"
    twitter = [player for player in db.twitter.find({})]
    twitter = remove_id(twitter)
    return twitter   

def fetch_arenas(db):  
    # db= get_db()
    # "{} means find everything"
    arenas = [stadium for stadium in db.Stadium_data.find({})]
    arenas = remove_id(arenas)
    return arenas   



if __name__ == '__main__':
    pass
    # print(fetch_stats())
    # print(fetch_attendance())
    # print(fetch_twitter())
    # print(fetch_arenas())
