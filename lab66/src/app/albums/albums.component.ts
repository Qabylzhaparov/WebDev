import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ALBUM} from "../db";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AlbumService} from "../album.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  albums!: Album[];
  loaded= false;
  newAlbum: Album;

  constructor(private albumService: AlbumService) {
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }
  ngOnInit() {
    // this.albums = ALBUM;
    this.getAlbums()
  }

  addAlbum(){
      this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
        this.albums.push(album);
        alert('Album successfully created!');
        this.newAlbum = {} as Album;
        // console.log(this.newAlbum)
        // console.log(this.albums)
      });
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums)=> {
        this.albums = albums;
        this.loaded = true;
      }
    );
  }
  deleteAlbum(id:number){
    this.albums = this.albums.filter((a)=> a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(()=>{
      window.alert(`Album with id: ${id} deleted successfully!`)
    })
  }
}
