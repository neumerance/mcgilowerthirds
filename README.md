# MCGI DYNAMIC LOWERTHIRDS
This simple app is intended for MCGIPRO use only.

## HOW TO USE?

### For Windows users
Step #1 Download this repo
![image](https://github.com/neumerance/mcgilowerthirds/assets/4254020/7d2ed272-8d23-49a5-bf9f-244b7e0bb133)

Step #2 Install nginx for Windows
- Download, extract then install [Nginx](https://nginx.org/download/nginx-1.24.0.zip)
- Find the installation folder(root folder of nginx in your computer)
- visit http://localhost, you should see the nginx default webpage

Step #3
- open `www` then create a folder here and name it `mcgi` in nginx installation folder
- extract the zip file you downloaded from step #1 in your mcgi folder in your nginx's `www/mcgi` folder

Step #4
- visit http://localhost/mcgi/lowerthirds/default
- You should see the lowerthird working

### Working with OBS

#### Adding lowerthirds in your scene collection 

Step #1
- Create a new scene, add browser source, and use http://localhost/mcgi/lowerthirds/default as URL
- Set the resolution to 1280x720
- Now you can use this scene in all of your scenes just add a scene to a scene then select your lowerthird scene

#### Adding lowerthirds controller
Step #2
- On top of your obs toolbar click `docks` then click `Custom browser docks`
- Add one row for lowerthird controller and name it `lowerthirds controller` then use this URL [http://localhost/mcgi/lowerthirds/controls](http://localhost/mcgi/lowerthirds/controls)
- Place the dock where you want to put it



