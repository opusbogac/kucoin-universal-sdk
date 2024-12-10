from setuptools import setup, find_packages

setup(
    name="kucoin-universal-sdk",
    version="0.1.0a2",
    description="Official KuCoin Universal SDK",
    author="KuCoin",
    author_email="api@kucoin.com",
    url="https://github.com/Kucoin/kucoin-universal-sdk",
    packages=find_packages(exclude=[
        "test*",
        "example*",
        "*.egg-info",
        "run_test.sh",
        "requirements-test.txt",
        "test.log",
    ]),
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Intended Audience :: Financial and Insurance Industry",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: Implementation :: CPython",
        "Operating System :: OS Independent",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Office/Business :: Financial :: Investment",
        "Topic :: Office/Business :: Financial :: Accounting",
        "Topic :: Utilities",
        "Typing :: Typed",
    ],
    python_requires=">=3.6",
    install_requires=[
        "typing_extensions>=4.12.2",
        "pydantic>=2.9.2",
        "requests>=2.32.3",
        "websocket-client>=1.8.0",
    ]
)
