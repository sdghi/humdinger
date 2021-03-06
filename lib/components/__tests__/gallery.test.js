/**
 * @jest-environment jsdom
 */

const { Gallery } = require("../gallery");

describe("Gallery", () => {
  const body = `<div class="gallery">
			<div class="gallery__item">1</div>
			<div class="gallery__item">2</div>
			<div class="gallery__item">3</div>
		</div>`;

  const defaultOptions = {
    itemSelector: ".gallery__item",
    start: 0,
  };

  test("The item selector should be able to be changed", () => {
    document.body.innerHTML = `<div class="gallery">
		<div class="item">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
	</div>`;

    const gallery = new Gallery(".gallery", {
      itemSelector: ".item",
      start: 0,
    });
    const galleryItems = document.querySelectorAll(".item");

    expect(gallery.getItems()).toEqual(galleryItems);
  });

  test("It should have a DOM Element", () => {
    document.body.innerHTML = body;
    const galleryElement = document.querySelector(".gallery");

    const stringGallery = new Gallery(".gallery", defaultOptions);
    const domGallery = new Gallery(galleryElement, defaultOptions);

    expect(stringGallery.node()).toEqual(galleryElement);
    expect(domGallery.node()).toEqual(galleryElement);
  });

  test("Next should increment the current index", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);

    gallery.next();

    expect(gallery.getIndex()).toBe(1);
  });

  test("Previous should decrement the current index", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);

    gallery.previous();

    expect(gallery.getIndex()).toBe(2);
  });

  test("Running getItems() should return all items", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    expect(gallery.getItems()).toEqual(galleryItems);
  });

  test("Running getCurrent() after next() should return the current element", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    // Look for gallery items at index 1
    gallery.next();

    const nextItem = { index: 1, element: galleryItems[1] };

    expect(gallery.getCurrent()).toEqual(nextItem);
  });

  test("Running getCurrent() after previous() should return the current element", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    // Look for gallery items at the last index
    gallery.previous();

    const previousItem = { index: 2, element: galleryItems[2] };

    expect(gallery.getCurrent()).toEqual(previousItem);
  });

  test("Running getNext() should return the next element", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    const nextItem = { index: 1, element: galleryItems[1] };

    expect(gallery.getNext()).toEqual(nextItem);
  });

  test("Running getPrevious() should return the previous element", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    gallery.next();
    const previousItem = { index: 0, element: galleryItems[0] };

    expect(gallery.getPrevious()).toEqual(previousItem);
  });

  test("Running getItem() will return the element at the index", () => {
    document.body.innerHTML = body;

    const gallery = new Gallery(".gallery", defaultOptions);
    const galleryItems = document.querySelectorAll(".gallery__item");

    const index = 2;

    const targetItem = { index, element: galleryItems[index] };

    expect(gallery.getItem(index)).toEqual(targetItem);
  });
});
