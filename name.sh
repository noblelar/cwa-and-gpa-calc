#!/bin/bash

# Check if filename is provided as an argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

filename=$1

# Check if the file exists
if [ ! -f "$filename" ]; then
    echo "File '$filename' not found."
    exit 1
fi

# Use temporary file for modifications
temp_file=$(mktemp)

# Read the file line by line
while IFS= read -r line; do
    # Check if the line contains "course_id"
    if [[ $line == *"id"* ]]; then
        # Remove the first and second quotation marks
        modified_line=$(echo "$line" | sed 's/^"//' | sed 's/"//')
        echo "$modified_line" >> "$temp_file"
    else
        echo "$line" >> "$temp_file"
    fi
done < "$filename"

# Overwrite the original file with modified content
mv "$temp_file" "$filename"

echo "Quotation marks removed from lines containing 'course_id' in $filename."
