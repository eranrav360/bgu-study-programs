import pandas as pd
import json
import sys

# Set console encoding to UTF-8
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')

# Read the Excel file
excel_file = pd.ExcelFile('Programs.xlsx', engine='openpyxl')

print(f"Found {len(excel_file.sheet_names)} sheets: {excel_file.sheet_names}")
print()

# Create a dictionary to group programs by department
all_programs = []

# Read all sheets
for sheet_name in excel_file.sheet_names:
    print(f"Reading sheet: {sheet_name}")
    df = pd.read_excel(excel_file, sheet_name=sheet_name)

    for _, row in df.iterrows():
        dept_name = row['DEPARTMENT_NAME']
        description = row['DESCRIPTION']

        if pd.notna(dept_name) and pd.notna(description):
            all_programs.append({
                'sheet': sheet_name,
                'department_name': dept_name,
                'institution': row['INSTITUTION'] if pd.notna(row['INSTITUTION']) else '',
                'department': row['DEPARTMENT'] if pd.notna(row['DEPARTMENT']) else '',
                'degree_level': row['DEGREE_LEVEL'] if pd.notna(row['DEGREE_LEVEL']) else '',
                'path': row['PATH'] if pd.notna(row['PATH']) else '',
                'specialization': row['SPECIALIZATION'] if pd.notna(row['SPECIALIZATION']) else '',
                'description': description
            })

    print(f"  Found {len(df)} programs")

print(f"\nTotal programs collected: {len(all_programs)}")
print()

# Group by department
departments_data = {}
for program in all_programs:
    dept_name = program['department_name']

    if dept_name not in departments_data:
        departments_data[dept_name] = []

    departments_data[dept_name].append({
        'sheet': program['sheet'],
        'institution': program['institution'],
        'department': program['department'],
        'degree_level': program['degree_level'],
        'path': program['path'],
        'specialization': program['specialization'],
        'description': program['description']
    })

# Save to JSON file
with open('programs_data.json', 'w', encoding='utf-8') as f:
    json.dump(departments_data, f, ensure_ascii=False, indent=2)

print(f"Data exported successfully!")
print(f"Total departments: {len(departments_data)}")
print(f"Total programs: {sum(len(programs) for programs in departments_data.values())}")
