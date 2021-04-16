from jinja2 import Template
import json


def generate_project_html(title, description, logo, github_url, website_url):
    f = open('PROJECT_TEMPLATE.html', 'r')
    template = Template(f.read())
    f.close()
    return template.render(
        title=title,
        description=description,
        logo=logo,
        github_url=github_url,
        website_url=website_url,
    )


if __name__ == '__main__':
    f = open('projects_data.json', 'r')
    data = json.loads(f.read())
    f.close()

    project_htmls = []

    for project in data:
        project_htmls.append(
            generate_project_html(
                title=project.get('title'),
                description=project.get('description'),
                logo=project.get('img'),
                github_url=project.get('github'),
                website_url=project.get('website'),
            )
        )
    
    html = '\n'.join(project_htmls)

    f = open('generated.html', 'w')
    f.write(html)
    f.close()

    print('done')
