echo "building ..."
ng build --prod

echo "deleting maps"
rm -f dist/*.map

echo
echo "Done!"
