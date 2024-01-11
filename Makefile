######################
# git subtree設定
######################
subtree_set:
	git remote add PR-Template https://github.com/daydule/PR-Template.git
subtree_pull:
	git subtree add --prefix=.github/PULL_REQUEST_TEMPLATE PR-Template main