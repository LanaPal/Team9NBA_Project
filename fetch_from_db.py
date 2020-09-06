from pymongo import MongoClient
# make connection and return db

def get_db():
    client = MongoClient('mongodb://localhost:27017')
    return client.nba_db

def fetch_stats():  
    db= get_db()
    # "{} means find everything"
    stats = [player for player in db.stats.find({})]
    return stats 


def fetch_attendance():  
    db= get_db()
    # "{} means find everything"
    attendance = [player for player in db.attendance.find({})]
    return attendance


def fetch_twitter():  
    db= get_db()
    # "{} means find everything"
    twitter = [player for player in db.twitter.find({})]
    return twitter   

def fetch_arenas():  
    db= get_db()
    # "{} means find everything"
    arenas = [stadium for stadium in db.Stadium_data.find({})]
    return arenas   



if __name__ == '__main__':
    print(fetch_stats())
    print(fetch_attendance())
    print(fetch_twitter())
    print(fetch_arenas())
