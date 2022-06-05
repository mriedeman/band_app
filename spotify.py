import requests 

USER_ID = 'spotify_login_username'

SPOTIFY_CREATE_PLAYLIST_URL = f'https://api.spotify.com/v1/users/{USER_ID}/playlists'
ACCESS_TOKEN = "BQC6FUeaKpUBkPgnsiF7Y9MsTPBusnPX8bKCmmTiOQWXcs6QTcYclQhaa4k5H4GW2BSbwCOBYiXkDoTulKpJ-92kRBq_4rbTbX79eTM4ijk06cMdFi0iVHudku5bIqYzWzV4p94quOwpbLNteWM9d3CeYkV3hV-UCHgV70TDsoINn-bweu7BrJlLCYY4hAFSEjz83AS9HicCsVb0U-aM9DEZWBjHx7M6"

def create_playlist_on_spotify(name, public):
    response = requests.post(
        SPOTIFY_CREATE_PLAYLIST_URL,
        headers = {
            "Authorization" : f"Bearer {ACCESS_TOKEN}"
        },
        json = {
            "name": name,
            "public": public
        }
    )
    json_resp = response.json()

    return json_resp

def main():
    playlist = create_playlist_on_spotify(
        name = "My API Playlist",
        public = False
    )

    print(f"Playlist: {playlist}")


if __name__ == '__main__':
    main()
