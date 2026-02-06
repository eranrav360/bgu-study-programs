import json

# Read the HTML template
with open('bachelor.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Read the JSON data
with open('programs_data.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)

# Create standalone HTML by embedding the JSON
standalone_html = html_content.replace(
    "fetch('programs_data.json')\n            .then(response => response.json())\n            .then(data => {",
    "Promise.resolve().then(() => {\n                const data = " + json.dumps(json_data, ensure_ascii=False, indent=16) + ";\n                return data;\n            }).then(data => {"
)

# Write standalone version
with open('bachelor_standalone.html', 'w', encoding='utf-8') as f:
    f.write(standalone_html)

print("Created bachelor_standalone.html - Bachelor programs only, works without a server!")
