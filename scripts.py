import click
from scripts.sphinx import sphinx


@click.group()
def root():
    "root commands"
    pass


root.add_command(sphinx)

if __name__ == '__main__':
    root()
