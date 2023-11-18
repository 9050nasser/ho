from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ho/__init__.py
from ho import __version__ as version

setup(
	name="ho",
	version=version,
	description="Site Files for HO",
	author="Mohammed Nasser",
	author_email="nasser@nasserx.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
