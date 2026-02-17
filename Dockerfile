# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    make \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the file containing the requirements/setup first to leverage Docker cache
COPY setup.cfg setup.py README.md README.rst ./

# Install python dependencies including docs extras
# We use --editable to allow volume mounting to work effectively for code updates if needed,
# though mainly we are just building docs.
# If just for docs, editable might not be strictly necessary but it's consistent with dev setup.
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir --editable ".[docs]"

# Copy the rest of the application code
COPY . .

# Expose the port that sphinx-autobuild will run on
EXPOSE 8000

# Default command to serve the documentation with live-reload
CMD ["sphinx-autobuild", "docs/source", "docs/build/html", "--host", "0.0.0.0", "--port", "8000"]
