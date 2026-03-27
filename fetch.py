import urllib.request
import json

url = 'https://api.github.com/users/fhattat/repos?per_page=100'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    response = urllib.request.urlopen(req)
    repos = json.loads(response.read())
    found = False
    for repo in repos:
        name = repo['name'].lower()
        desc = (repo['description'] or '').lower()
        if 'fraud' in name or 'fraud' in desc:
            print("FOUND REPO!")
            print(f"Name: {repo['name']}")
            print(f"Description: {repo['description']}")
            print(f"URL: {repo['html_url']}")
            found = True
    if not found:
        print("No fraud repo found.")
except Exception as e:
    print("Error:", e)
