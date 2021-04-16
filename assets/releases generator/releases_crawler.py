def build_release_html(tag_name, release_date, title, body_html, release_url, download_url):
    f = open('RELEASE_TEMPLATE.html', 'r')
    template = Template(f.read())
    f.close()

    return template.render(
        tag_name=tag_name,
        release_date=release_date,
        title=title,
        body_html=body_html,
        include_buttons=int(tag_name[1])>=2,
        download_url=download_url,
        release_url=release_url,
    )

def build_site(release_tags: str):
    f = open('SITE_TEMPLATE.html', 'r')
    template = Template(f.read())
    f.close()
    return template.render(
        releases=release_tags,
    )


from github3 import GitHub
import sys
import getpass
import json
from jinja2 import Template


if __name__ == '__main__':

    pw = getpass.getpass('user password: ')
    if len(pw)>0:
        gh = GitHub("leon-thomm", pw)
    else:
        gh = GitHub()
    
    repo = gh.repository("leon-thomm", "Ryven")
    print(repo)
    releases = repo.releases()
    release_tags = []

    for release in releases:

        data = release.as_dict()

        year, month, day = int(data['published_at'][:4]), int(data['published_at'][5:7]), int(data['published_at'][8:10])
        month_str = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]

        html = build_release_html(
            tag_name=data['tag_name'],
            release_date=f'{month_str} {day}, {year}',
            title=data['name'],
            body_html=data['body_html'],
            release_url=data['html_url'],
            download_url=data['zipball_url'],
        )
        release_tags.append(html)

    with open('releases.html', 'w') as f:
        f.write(build_site(release_tags))

    print('done')