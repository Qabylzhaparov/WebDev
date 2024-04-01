import {Component, OnInit} from '@angular/core';
import {AlbumsComponent} from "../albums/albums.component";
import {Album} from "../models";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ALBUM} from "../db";
import {AlbumService} from "../album.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  album!: Album
  loaded = false

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router) {
    // observable means when you donno which type your field will get yet so then we will use observable
  }

  ngOnInit() {
    this.getAlbums()
    console.log(this.album)
  }

  getAlbums(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.loaded = false
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
        console.log(album);
      })

      // this.album = ALBUM.find((album)=> album.id === id) as Album;
    })
  }

  updateAlbum() {
    this.albumService.updateAlbum(this.album).subscribe(updatedAlbum => {
      window.alert('Album updated successfully!');
    });
  }

  goBack() {
    this.router.navigate(['/albums']); // Navigate back to the albums page
  }


}
