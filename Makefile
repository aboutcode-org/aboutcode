# Python version can be specified with `$ PYTHON_EXE=python3.x make ...`
PYTHON_EXE?=python3
VENV_LOCATION=venv
ACTIVATE?=. ${VENV_LOCATION}/bin/activate;

conf:
	@echo "-> Install dependencies"
	./configure --docs

docs: conf
	rm -rf docs/build/
	@${ACTIVATE} sphinx-build docs/source docs/build/

clean:
	@echo "-> Clean the Python env"
	rm -rf .venv/ .*cache/ *.egg-info/ build/ dist/
	find . -type f -name '*.py[co]' -delete -o -type d -name __pycache__ -delete

.PHONY: conf docs clean
