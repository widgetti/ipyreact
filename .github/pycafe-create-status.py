import os
import sys
from urllib.parse import quote

from github import Github

# Authenticate with GitHub
access_token = os.getenv("GITHUB_TOKEN")
g = Github(access_token)


repo_name = "widgetti/ipyreact"
commit_sha = sys.argv[1]  # e.g d39677a321bca34df41ecc87ff7e539b450207f2
run_id = sys.argv[2]  # e.g 1324, usually obtained via ${{ github.run_id }} or ${{ github.event.workflow_run.id }} in GitHub Actions workflow files
type = "solara"  # streamlit/dash/vizro/solara/panel

# your default code
code = """import ipyreact


class ConfettiWidget(ipyreact.ValueWidget):
    _esm = \"""
    import confetti from "canvas-confetti";
    import * as React from "react";

    export default function({value, setValue}) {
        return <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    };\"""
page = ConfettiWidget()
"""

artifact_name = "ipyreact-dist"  # name given in the GitHub Actions workflow file for the artifact

# your default requirements, the wheel version number (0.5.0) is bumped up for each new release using bump2version
requirements = f"""solara
https://py.cafe/gh/artifact/{repo_name}/actions/runs/{run_id}/{artifact_name}/ipyreact-0.5.0-py3-none-any.whl
"""

# GitHub Python API
repo = g.get_repo(repo_name)

base_url = f"https://py.cafe/snippet/{type}/v1"
url = f"{base_url}#code={quote(code)}&requirements={quote(requirements)}"

# Define the deployment status
state = "success"  # Options: 'error', 'failure', 'pending', 'success'
description = "Test out this PR on a PyCafe playground environment"
context = "PyCafe"

# Create the status on the commit
commit = repo.get_commit(commit_sha)
commit.create_status(state="success", target_url=url, description=description, context="PyCafe")
print(f"Deployment status added to commit {commit_sha}")
