from pymongo import MongoClient
from secret import credentials

# make connection and return db

class fetch_from_db():

    def __init__(self):
        self.client = MongoClient(credentials)
        self.db = self.client.nba_db
        self.stats = self.db.stats
        self.attendance = self.db.attendance
        self.twitter = self.db.twitter
        self.stadium_data = self.db.Stadium_data

    # def get_db(self):
    # client = MongoClient('mongodb://localhost:27017')
    # connection = f'mongodb+srv://team9_nba_db:team9_nba_db@cluster0.zaqco.mongodb.net/?retryWrites=true&w=majority'
    # connection = f'mongodb+srv://{credentials.user}:{credentials.password}@cluster0.zaqco.mongodb.net/<dbname>?retryWrites=true&w=majority'
    # client = MongoClient(connection)
    # return client.nba_db

    def remove_id(self, dictionaries):
        for d in dictionaries:
            del d['_id']
        return dictionaries

    def fetch_stats(self):  
    # db= get_db()
    # "{} means find everything"
        stats = [player for player in self.stats.find({})]
        stats = self.remove_id(stats)
        # print(stats)
        return stats 


    def fetch_attendance(self):  
    # db= get_db()
    # "{} means find everything"
        attendance = [player for player in self.attendance.find({})]
        attendance = self.remove_id(attendance)
        return attendance


    def fetch_twitter(self):  
    # db= get_db()
    # "{} means find everything"
        twitter = [player for player in self.twitter.find({})]
        twitter = self.remove_id(twitter)
        return twitter   

    def fetch_arenas(self):  
    # db= get_db()
    # "{} means find everything"
        arenas = [stadium for stadium in self.Stadium_data.find({})]
        arenas = self.remove_id(arenas)
        return arenas   



# if __name__ == '__main__':
#     pass
    # print(fetch_stats())
    # print(fetch_attendance())
    # print(fetch_twitter())
    # print(fetch_arenas())
